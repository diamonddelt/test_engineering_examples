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

response = get_endpoint_response(ALL_ENDPOINT, [NAME_FILTER, CURRENCY_FILTER])
# print(response)
# print(type(response))


def obtain_country_list_using_specific_currency(currency_shortcode):
    usd_country_list = []

    for country in response:
        for currency in country['currencies']:
            # check if each dict has a given key called 'code'
            if 'code' in currency:
                if currency['code'] == currency_shortcode:
                    usd_country_list.append(country['name'])
                    break
            else:
                print(f'ERROR - {country["name"]} does not have a valid currency code record!')
        
    print(usd_country_list)
    return usd_country_list

obtain_country_list_using_specific_currency('USD') 

# def validate_posts_get_functionality():
#     """Validates functionality of a GET to the /posts endpoint"""
#     response = get_endpoint_response(POSTS_ENDPOINT)
    
#     print('---Beginning Test: Validate 100 objects returned from a GET to the /posts endpoint---')
#     # Validate that 100 objects are returned from the GET, as specified in the documentation
#     count = 0
#     for post in response:
#         count += 1
    
#     if count != 100:
#         print(f'FAIL: {count} posts were returned from the GET.')
#     else:
#         print(f'PASS: {count} posts were returned from the GET.')

#     print('---Ending Test: Validate 100 objects returned from a GET to the /posts endpoint---')


#     print('---Beginning Test: Validate correct keys are returned from a GET to the /posts endpoint---')
#     # Validate that a random post contains the correct key names, as specified in the documentation
#     # The keys to be returned in a post object are: userId, id, title, and body
#     random_post_position = random.randint(0, count)
#     index = 0
#     key_map = ['userId', 'id', 'title', 'body']

#     for key in response[random_post_position]:
#         if key == key_map[index]:
#             print(f'PASS: {key} matches specification value of the API.')
#         else:
#             print(f'FAIL: {key} does not match specification value of the API.')
#         index += 1
    
#     print('---Ending Test: Validate correct keys are returned from a GET to the /posts endpoint---')

# def validate_users_get_functionality():
#     """Validates functionality of a GET to the /users endpoint"""
#     response = get_endpoint_response(USERS_ENDPOINT)
    
#     # Validate that 10 objects are returned from the GET, as specified in the documentation
#     print('---Beginning Test: Validate 10 objects returned from a GET to the /users endpoint---')

#     count = 0
#     for user in response:
#         count += 1
    
#     if count != 10:
#         print(f'FAIL: {count} posts were returned from the GET.')
#     else:
#         print(f'PASS: {count} posts were returned from the GET.')

#     print('---Ending Test: Validate 10 objects returned from a GET to the /users endpoint---')

#     # Validate that each user record in the response object contains a valid integer id value
#     print('---Beginning Test: Validate each user object contains a valid id from a GET to the /posts endpoint---')

#     count = 0
#     for user in response:
#         if user["id"] is not None:  
#             if isinstance(user["id"], int):
#                 print(f'PASS: id value for user record {count + 1} contains a valid id.')
#             else:
#                 print(f'FAIL: id value for user record {count + 1} is not an integer value.')
#         else:
#             print(f'FAIL: id value for user record {count + 1} does not exist in JSON response.')
#         count += 1

#     print('---Ending Test: Validate each user object contains a valid id from a GET to the /posts endpoint---')


# Execute API validations
# Refactor if time permits to move these to an entrypoint class

# validate_posts_get_functionality()
# validate_users_get_functionality()