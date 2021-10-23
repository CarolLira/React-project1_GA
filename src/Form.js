import { useCallback, useState } from "react";
import { useHistory } from "react-router";

import { webhook } from './service/api';

export default function Form() {
    const [data, setData] = useState({});
    const history = useHistory();

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        webhook.post('', data).then(
            () => history.push('/')
        ).catch(() => alert('deu ruim'))
    }, [data, history]);

    return (
        <div>
            <h1>Cadastro</h1>
            {data?.nome}
            {data?.email}
            {data?.apelido}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="nome"
                    onChange={e => setData({ ...data, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="e-mail"
                    onChange={e => setData({ ...data, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="apelido"
                    onChange={e => setData({ ...data, apelido: e.target.value })}
                />
                <input
                    type="submit"
                    value="cadastrar"
                />
            </form>
        </div>
    );
}