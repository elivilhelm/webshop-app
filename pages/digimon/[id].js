import { keyframes } from "styled-components"


export default function digimon({ digimonCards }) {
    console.log(digimonCards)

    return (
        <div className="cardMainCARD">
            {
                Object.entries(digimonCards[0]).map(([key, value]) => {
                    return(
                        <p key={key}> {key}: {value}</p>
                    ) 
                })
            }
        </div >
    )

}


export async function getStaticPaths() {
    const res = await fetch("https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc")

    const data = await res.json()

    const paths = data.map((item) => ({
        params: { id: item.cardnumber }
    }))


    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://digimoncard.io/api-public/search.php?card=${params.id}`)
    const data = await res.json();
    console.log(data)

    return { props: { digimonCards: data } }
}
