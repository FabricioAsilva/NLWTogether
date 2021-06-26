import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { TestContext } from '../App';
import illustrationImg from '../assets/images/illustration.svg'; //webpac: permiti esse metodo de importação de arquivo no frontend.
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';


export function NewRoom(){
    const value = useContext(TestContext)

    return (
        <div id="page-auth" >
        <aside>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q &amp; A ao-vivo</strong>
            <p>Tire as dúvidas de sua audiência em tempo-real</p>
        </aside>
        <main>
            <div className="main-content">
                <img src={logoImg} alt="Logo Letmeask" />
                <h2>Criar uma nova sala</h2>
                <form>
                    <input 
                        type="text" 
                        placeholder="Digite o nome da sala"
                    />
                    <Button type="submit">
                        Criar sala
                    </Button>
                </form>
                <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link> </p>
            </div>
        </main>
    </div>
    );
}