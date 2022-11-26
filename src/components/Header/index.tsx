import logoImg from '../../assets/logo.png';
import { Container, Content } from './styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New Transaction
                </button>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Sign In
                </button>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Sign Up
                </button>
            </Content>
        </Container>
    );
}