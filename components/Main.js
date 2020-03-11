import { useEffect } from 'react'
import Head from 'next/head'
import SaveTheDate from './SaveTheDate'
import Lights from './Lights'
import Card from './Card'
import { useRouter } from 'next/router'
import { config } from '../data/data'

const Main = props => {
    const router = useRouter()
    const text = props.text
    return text ? (
        <div>
            <main>
                <Lights />
                <SaveTheDate font="Meddon" color={config.lightColor}>
                    {text.saveTheDate}
                </SaveTheDate>
                <Card lines={text.card} color={config.darkColor} />
            </main>
        </div>
    ) : (
        ''
    )
}

export default Main
