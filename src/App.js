import React from 'react'
import Section from './components/Section'
import Layout from './components/Layout'
import SectionPage from './Pages/SectionPage'
import DashboardPage from './Pages/DashboardPage'

export default function App() {
    return (
        <>
            <Layout>
                <Section >
                    <SectionPage></SectionPage>
                    <DashboardPage ></DashboardPage>
                </Section>
            </Layout>

        </>


    )
}
