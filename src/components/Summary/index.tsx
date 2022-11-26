import { Container } from "./styles";

import  iconmeImg from '../../assets/Entradas.png';
import outcomeImg from '../../assets/Saidas.png';
import totalImg from '../../assets/Total.png'

import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
   const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
        } , {
            deposits: 0,
            withdraw: 0,
            total: 0,
        })

    return (
        <Container>
            <div>
                <header>
                    <p>Balance</p>
                    <img src={iconmeImg} alt="Balance" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'INR'
                    }).format(summary.deposits)}  
                </strong>
            </div> 

            <div>
                <header>
                    <p>Spent</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- 
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'INR'
                    }).format(summary.withdraw)}
                </strong>
            </div> 

            <div style={{background: 'var(--green)', color: 'var(--shape)'}}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'INR'
                    }).format(summary.total)}
                </strong>
            </div> 
        </Container>
    );
}