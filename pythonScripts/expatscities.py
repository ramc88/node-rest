# -*- coding: utf-8 -*-
"""expatsCities.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/106zk8MhjkZOrcWZjsV6F2d_V8pAiBVmS
"""

import json
import requests
!git clone https://github.com/facebook/facebook-python-ads-sdk.git
!pip install facebookads
import csv
import pprint
import numpy as np
import datetime

#Add to header of your file
from facebookads.api import FacebookAdsApi
#from facebookads import objects

#CONSTs

token="EAADYZBxQ6cxUBAHv8N4HZAJyHuAqUuPMWDXWg9vWtOop2AiqZCNeWMZB3wbFPSLjyiw1NRxNSwvP3heX82TZC8w55xhtr5PdzPLz4NfEb5Fl3f1upoEix7rlkkUnVPRZCCjuRYAiyyr6vEfiYFquOu7w8SDA6Q4z4vBKI2ny2jQQZDZD"
act="43038309"
version="v9.0" # replace the X with your values
credentials='https://graph.facebook.com/{}/act_{}/delivery_estimate?access_token={}&include_headers=false&method=get&optimization_goal=REACH&pretty=0&suppress_http_code=1'.format(version, act, token)

city_codes = list(csv.reader(open('citycodes.csv', encoding='latin-1')))
city_headrs = city_codes[0]
city_json = {}

for c in range(len(city_codes)):
  if c != 0:
    city_json[c-1] = {}
    for head in range(len(city_headrs)):
      city_json[c-1][city_headrs[head]] = city_codes[c][head]

print(city_json)

expats_codes = list(csv.reader(open('expats.csv', encoding='latin-1')))
expats_headrs = expats_codes[0]
expats_json = {}

for c in range(len(expats_codes)):
  if c != 0:
    expats_json[c-1] = {}
    for head in range(len(expats_headrs)):
      expats_json[c-1][expats_headrs[head]] = expats_codes[c][head]

print(expats_json[1])

total = len(city_codes)*len(expats_codes)

sex = [1,2]
franja1 = [13,24]
franja2 = [25, 54]
franja3 = [55, 65]

_#LOOP

proc=1
count=1
x = np.array([["CODE","DATE", "TIME_INI", "TIME_FIN", "EXPAT_ID", "EXPAT_NAME", "COUNTRY_ID", "COUNTRY_NAME", "CITY_KEY", "CITY_NAME", "REGION_ID", "REGION_NAME",   
         "M_E1_dau", "M_E1_mau", "M_E2_dau", "M_E2_mau", "M_E3_dau", "M_E3_mau", "F_E1_dau", "F_E1_mau", "F_E2_dau", "F_E2_mau", "F_E3_dau", "F_E3_mau"]])
    
for i in range(len(expats_json)):
  for j in range(len(city_json)):
    print('COUNT>>>', count)
    count = count+1
    date = datetime.datetime.now()
    start_time = datetime.datetime.now()

    type = 'behaviors'
    id = expats_json[i]['id']
    name = expats_json[i]['name']
    country_expat_id = expats_json[i]['alpha-2']

    country_id = city_json[j]['alpha-2']
    city_id = city_json[j]['KEY']
    city_name = city_json[j]['NAME_CITY']

    if country_expat_id != country_id:
      
      #print('ID>>', id)
      print('NAME>>', name)
      #print('COUNTRY EXP ID>>', country_expat_id)
      #print('COUNTRY ID>>', country_id)
      #print('CITY ID>>', city_id)
      print('CITY NAME>>', city_name)

      #Query for men - franja 1
      flex_chartics = [{
        type: [{
            'id': id,
            'name': name
        }]
      }]

      targeting1 = {
        "age_min": franja1[0],
        "age_max": franja1[1],
        "genders": [sex[0]],
        "flexible_spec": flex_chartics,
        "geo_locations": {
            "cities": [{
                "key": city_id
            }],
            "location_types": ["home"]
        },
        "facebook_positions": ["feed", "instant_article", "instream_video", "marketplace"],
        "device_platforms": ["mobile","desktop"],
        "publisher_platforms":["facebook","messenger"],
        "messenger_positions":["messenger_home"]
      }
      
      
      query1 = '{}&targeting_spec={}'.format(credentials, json.dumps(targeting1))
      resp1 = requests.get(query1).json()

      #print(query1)
      print(resp1['error'])

      if resp1['error']:
        break

      m_E1_dau=resp1['data'][0]['estimate_dau']
      m_E1_mau=resp1['data'][0]['estimate_mau']

      #Query for men - franja 2

      flex_chartics = [{
        type: [{
            'id': id,
            'name': name
        }]
      }]

      targeting1 = {
        "age_min": franja2[0],
        "age_max": franja2[1],
        "genders": [sex[0]],
        "flexible_spec": flex_chartics,
        "geo_locations": {
            "cities": [{
                "key": city_id
            }],
            "location_types": ["home"]
        },
        "facebook_positions": ["feed", "instant_article", "instream_video", "marketplace"],
        "device_platforms": ["mobile","desktop"],
        "publisher_platforms":["facebook","messenger"],
        "messenger_positions":["messenger_home"]
      }
      
      
      query2 = '{}&targeting_spec={}'.format(credentials, json.dumps(targeting1))
      resp2 = requests.get(query2).json()

      #print(query1)
      #print(resp1)

      if resp2['error']:
        break

      m_E2_dau=resp2['data'][0]['estimate_dau']
      m_E2_mau=resp2['data'][0]['estimate_mau']

    #Query for men - franja 3

      flex_chartics = [{
        type: [{
            'id': id,
            'name': name
        }]
      }]

      targeting1 = {
        "age_min": franja3[0],
        "age_max": franja3[1],
        "genders": [sex[0]],
        "flexible_spec": flex_chartics,
        "geo_locations": {
            "cities": [{
                "key": city_id
            }],
            "location_types": ["home"]
        },
        "facebook_positions": ["feed", "instant_article", "instream_video", "marketplace"],
        "device_platforms": ["mobile","desktop"],
        "publisher_platforms":["facebook","messenger"],
        "messenger_positions":["messenger_home"]
      }
      
      
      query3 = '{}&targeting_spec={}'.format(credentials, json.dumps(targeting1))
      resp3 = requests.get(query3).json()

      #print(query1)
      #print(resp1)

      if resp3['error']:
        break

      m_E3_dau=resp3['data'][0]['estimate_dau']
      m_E3_mau=resp3['data'][0]['estimate_mau']


      #Query for women - franja 1
      flex_chartics = [{
        type: [{
            'id': id,
            'name': name
        }]
      }]

      targeting1 = {
        "age_min": franja1[0],
        "age_max": franja1[1],
        "genders": [sex[1]],
        "flexible_spec": flex_chartics,
        "geo_locations": {
            "cities": [{
                "key": city_id
            }],
            "location_types": ["home"]
        },
        "facebook_positions": ["feed", "instant_article", "instream_video", "marketplace"],
        "device_platforms": ["mobile","desktop"],
        "publisher_platforms":["facebook","messenger"],
        "messenger_positions":["messenger_home"]
      }
      
      
      query4 = '{}&targeting_spec={}'.format(credentials, json.dumps(targeting1))
      resp4 = requests.get(query4).json()

      #print(query1)
      #print(resp1)

      if resp4['error']:
        break

      f_E1_dau=resp4['data'][0]['estimate_dau']
      f_E1_mau=resp4['data'][0]['estimate_mau']

      #Query for women - franja 2

      flex_chartics = [{
        type: [{
            'id': id,
            'name': name
        }]
      }]

      targeting1 = {
        "age_min": franja2[0],
        "age_max": franja2[1],
        "genders": [sex[1]],
        "flexible_spec": flex_chartics,
        "geo_locations": {
            "cities": [{
                "key": city_id
            }],
            "location_types": ["home"]
        },
        "facebook_positions": ["feed", "instant_article", "instream_video", "marketplace"],
        "device_platforms": ["mobile","desktop"],
        "publisher_platforms":["facebook","messenger"],
        "messenger_positions":["messenger_home"]
      }
      
      
      query5 = '{}&targeting_spec={}'.format(credentials, json.dumps(targeting1))
      resp5 = requests.get(query5).json()

      #print(query1)
      #print(resp1)

      if resp5['error']:
        break

      f_E2_dau=resp5['data'][0]['estimate_dau']
      f_E2_mau=resp5['data'][0]['estimate_mau']

    #Query for women - franja 3

      flex_chartics = [{
        type: [{
            'id': id,
            'name': name
        }]
      }]

      targeting1 = {
        "age_min": franja3[0],
        "age_max": franja3[1],
        "genders": [sex[1]],
        "flexible_spec": flex_chartics,
        "geo_locations": {
            "cities": [{
                "key": city_id
            }],
            "location_types": ["home"]
        },
        "facebook_positions": ["feed", "instant_article", "instream_video", "marketplace"],
        "device_platforms": ["mobile","desktop"],
        "publisher_platforms":["facebook","messenger"],
        "messenger_positions":["messenger_home"]
      }
      
      
      query6 = '{}&targeting_spec={}'.format(credentials, json.dumps(targeting1))
      resp6 = requests.get(query3).json()

      #print(query1)
      #print(resp1)

      if resp6['error']:
        break

      f_E3_dau=resp6['data'][0]['estimate_dau']
      f_E3_mau=resp6['data'][0]['estimate_mau']

      end_time = datetime.datetime.now()

      row = np.array([proc,date,start_time,end_time,id,name,country_id,city_json[j]['NAME'],city_id,city_name,city_json[j]['region_id'],city_json[j]['NAME_REGION'],m_E1_dau,m_E1_mau,m_E2_dau,m_E2_dau,m_E3_dau,m_E3_mau,f_E1_dau,f_E1_dau,f_E2_dau,f_E2_mau,f_E3_dau,f_E3_mau])
      #print('ROW_________', row)
      #print(x)
      #APPEND DATA TO FINAL MATRIX
      x = np.append(x,[row], axis=0)
      #print(x)

print(x)
np.savetxt("foo.csv", x, delimiter=",", fmt='%s')