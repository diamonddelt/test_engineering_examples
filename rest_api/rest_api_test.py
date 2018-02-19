import requests # Used for basic HTTP requests processing
import json # Used for JSON manipulation

# ------------------------------------------------------------------------------------------
# Testing the free REST API URL: https://restcountries.eu/rest/v2
# NOTE: I am not familiar with API testing frameworks in Python, so I did not use them
# ------------------------------------------------------------------------------------------

API_URI = 'https://restcountries.eu/rest/v2'
ALL_ENDPOINT = '/all'
NAME_FILTER = 'name'
CURRENCY_FILTER = 'currencies'
CAPITAL_FILTER = 'capital'

def get_endpoint_response(endpoint, filters=None):
    """Performs a GET to the specified endpoint, applies optional filters in the querystring."""
    complete_uri = API_URI + endpoint

    if filters is not None:
        complete_uri = complete_uri + '?fields='

        for x in filters:
            complete_uri = complete_uri + x + ';'

    raw_json_response = requests.get(complete_uri).text
    parsed_json_response = json.loads(raw_json_response)
    return parsed_json_response

def obtain_country_list_using_specific_currency(currency_shortcode):
    """Obtain a list of countries which use a specific currency, 
    passed in as an ISO 4217 currency code. 
    EX: 'USD' for US Dollars or 'CHF' for Swiss Francs."""
    response = get_endpoint_response(ALL_ENDPOINT, [NAME_FILTER, CURRENCY_FILTER])

    usd_country_list = []

    for country in response:
        for currency in country['currencies']:
            if 'code' in currency:
                if currency['code'] == currency_shortcode:
                    usd_country_list.append(country['name'])
                    break
            else:
                print(f'ERROR - {country["name"]} does not have a valid ISO 4217 currency code record!')
        
    print(usd_country_list)
    return usd_country_list

def display_name_and_capital_of_all_countries():
    """Display all of the countries from the API along with their capital city."""
    response = get_endpoint_response(ALL_ENDPOINT, [NAME_FILTER, CAPITAL_FILTER])

    for record in response:
        for k, v in record.items():
            print(f'{k} : {v}')

def verify_country_count(num):
    """Verifies the number of countries returned from the API matches the input."""
    response = get_endpoint_response(ALL_ENDPOINT, [NAME_FILTER])

    if num != len(response):
        print(f'FAIL - {len(response)} records returned from the API; expected {num}!')
    else:
        print(f'PASS - {len(response)} countries are returned from the API.')

# Using the REST API
obtain_country_list_using_specific_currency('USD') # Feel free to change the currency code
display_name_and_capital_of_all_countries()
verify_country_count(250) # Verify that the correct number of results are returned from the API (the expected number is 250)