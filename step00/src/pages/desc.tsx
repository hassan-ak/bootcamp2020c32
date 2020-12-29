import React from 'react';
import Layout from '../components/Layout';
import  styles   from "./desc.module.css";

export default () => {
    return (
        <div>
            <Layout>
                <p className={styles.myComponent}>
                    How with component styles
                </p>     
            </Layout>
        </div>
    );
}