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

            <div className="p-6">
                {/* Encabezado*/}
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Listado de usuarios
                    </h1>
                </div>

                <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-900">
                    <table className="min-w-ful divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
