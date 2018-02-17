import requests # Used for basic HTTP requests processing
import json # Used for JSON manipulation
# import random # Used for random number generation and behavior

# ------------------------------------------------------------------------------------------
# I will be using the main API URL: https://restcountries.eu/rest/v2
# NOTE: I am not familiar with API testing frameworks in Python, so I did not use them
# ------------------------------------------------------------------------------------------

API_URI = 'https://restcountries.eu/rest/v2'
ALL_ENDPOINT = '/all'
NAME_FILTER = 'name'
CURRENCY_FILTER = 'currencies'

def get_endpoint_response(endpoint, filters=None):
    complete_uri = API_URI + endpoint

    if filters is not None:
        complete_uri = complete_uri + '?fields='

        for x in filters:
            complete_uri = complete_uri + x + ';'

    raw_json_response = requests.get(complete_uri).text
    parsed_json_response = json.loads(raw_json_response)
    return parsed_json_response

def obtain_country_list_using_specific_currency(currency_shortcode):
    response = get_endpoint_response(ALL_ENDPOINT, [NAME_FILTER, CURRENCY_FILTER])
    # print(response)
    # print(type(response))

    usd_country_list = []

    for country in response:
        for currency in country['currencies']:
            if 'code' in currency:
                if currency['code'] == currency_shortcode:
                    usd_country_list.append(country['name'])
                    break
            else:
                print(f'ERROR - {country["name"]} does not have a valid currency code record!')
        
    print(usd_country_list)
    return usd_country_list

def obtain_name_and_capital_of_all_countries():
    print('hello')

obtain_country_list_using_specific_currency('USD')
obtain_name_and_capital_of_all_countries()