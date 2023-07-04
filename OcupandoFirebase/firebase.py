import numpy as np
import pandas as pd
import json
import firebase_admin
from   firebase_admin import credentials
from   firebase_admin import firestore


def to_firebase(file_csv,file_name,name_collection,private_key):
    df = pd.read_csv(file_csv,sep=',',encoding='utf-8')
    #df = df.replace('\n', '', regex=True)
    #df['data_aplicacao'] = [''    for i in range(df.shape[0])]
    #df['lote']           = [''    for i in range(df.shape[0])]
    #df['medico']         = [''    for i in range(df.shape[0])]
    #df['idade']          = [''    for i in range(df.shape[0])]
    #df['status']         = [False for i in range(df.shape[0]) ]



    df.to_json(file_name,orient='index',force_ascii=False)
    print(df)
    cred = credentials.Certificate(private_key)
    app  = firebase_admin.initialize_app(cred)
    db = firestore.client(app)
 
    with open(file_name, 'r', encoding='utf-8') as f:
        my_data = json.load(f)


    index = 0
    for keys in list(my_data.keys()):
        my_data[keys]['index'] = index
        db.collection(name_collection).add(my_data[keys])
        index +=1


        
to_firebase('dados_csv/0_1.5anos.csv',"12m.json","desenvolvimento",'cad-kids-firebase-adminsdk-q0osp-3ac82b89ba.json')