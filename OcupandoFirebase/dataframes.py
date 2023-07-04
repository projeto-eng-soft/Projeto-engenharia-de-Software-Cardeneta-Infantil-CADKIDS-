import pandas as pd


#df = pd.read_csv(r'dados_csv/6-1.5anos.csv',sep=',',encoding='utf-8')
#df3 = pd.read_csv(r'dados_csv/0_6meses.csv',sep=',',encoding='utf-8')

#pd.concat([df3,df],axis=0).to_csv('dados_csv/0_1.5anos.csv',index=False)

print(pd.read_csv(r'dados_csv/vacinas_ate_5anos.csv',sep=','))