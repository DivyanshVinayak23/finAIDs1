import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function TransactionTable() {
    const { transactions } = useTransactions();

    return (
        <Container>
            <h1>Listagem</h1>
            
            <table>
                <thead>
                    <tr>
                        <th className='Title'>Title</th>
                        <th>Change</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transactions => {
                        return (
                            <tr key={transactions.id}>
                                <td>{transactions.title}</td>
                                <td className={transactions.type}>
                                    {transactions.type === 'withdraw' ? '- ' : ''}

                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'INR'
                                    }).format(transactions.amount)}
                                </td> 
                                <td>{transactions.category}</td>
                                <td>
                                     {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transactions.createdAt)
                                     )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}