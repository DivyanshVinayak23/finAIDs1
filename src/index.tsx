import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: { 
      transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title:'Freelance',
          amount: 6000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2022-24-11 09:00:00 ')
        },
        {
          id: 2,
          title:'Food',
          amount: 2000,
          type: 'withdraw',
          category: 'food',
          createdAt: new Date('2022-24-11 11:00:00 ')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
