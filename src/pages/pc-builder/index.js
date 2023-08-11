import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';
import Styles from '@/styles/PC-Build.module.css'
import { Button, Space, Table } from 'antd';
import { useRouter } from 'next/router';
const { Column } = Table;

const PcBuilder = () => {

    const router = useRouter()

    const data = [
        {
            key: '1',
            component: { name : "CPU / Processor"},
            product: { 
                category: "processor",
                data:{}
            },
        },
        {
            key: '2',
            component: { name : "Motherboard"},
            product: {
                category: "motherboard",
                data:{},
            },
        },
        {
            key: '2',
            component: { name : "RAM"},
            product: {
                category: 'RAM',
                data: {}
            },
        },
        {
            key: '2',
            component: { name : "Power Supply Unit"},
            product: {
                category:"power supply",
                data: {}
            },
        },
        {
            key: '2',
            component: { name : "Storage Device"},
            product: {
                category: "storage",
                data: {}
            },
        },
        {
            key: '2',
            component: { name : "Monitor"},
            product: {
                category: "monitor",
                data: {}
            },
        },
    ];

    return (
        <div className={Styles.container}>
            <div className={Styles.main}>
                <h1>Hello wolrd</h1>
                <Table dataSource={data}>

<Column title="Component" dataIndex="component" key="component" render={(component) => (
    <div style={{width:"300px", height:"100px"}}> {component.name}</div>
)}/>

<Column title="Product" dataIndex="product" key="product" width="100%" render={({category, data}) => (
                        <div className="product-info">
                            {data.product_name ?  <>
                            <img src={data.image_url} alt={data.product_name} className="product-image" />
                            <div className="product-details">
                                <h3>{data.product_name}</h3>
                                <p>Price: {data.price}</p>
                                <p>Rating: {data.rating}</p>
                            </div>
                            </> : <Button type='Primary' style={{backgroundColor: "red"}} onClick={() => router.push(`/pc-builder/select/${category}`)}>Select Product</Button>}
                        </div>
                    )} />
</Table>
            </div>

        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page){

    return (
        <RootLayout>{page}</RootLayout>
    )
}