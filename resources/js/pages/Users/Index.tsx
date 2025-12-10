import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
}

/*const [data, setData] = useState({
    nombre: '',
    email: '',
});*/

const breadcrumb: BreadcrumbItem[] = [{ title: 'USUARIOS', href: '/users' }];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumb}>
            <Head title="Users" />
            <div>
                <h1>Listado de usuarios</h1>
            </div>
        </AppLayout>
    );
}
