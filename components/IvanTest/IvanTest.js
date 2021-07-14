import InstagramCard from '../InstagramCard/InstagramCard'
import styles from './Ya.module.scss'
import Button from '../Button/Button'
import Title from '../Title/Title'
// import Image from 'next/image'
// import Link from 'next/link'
import BuyApartment from '../PageSections/BuyApartment/BuyApartment'
import LeadForm from '../Form/LeadForm'
import FindEstate from '../PageSections/FindEstate/FindEstate'
import {useSelector} from 'react-redux'
import FeedNews from '../PageSections/FeedNews/FeedNews'
import PaymentMethod from '../PageSections/PaymentMethod/PaymentMethod'
import DocsSection from '../PageSections/DocsSection/DocsSection'
import BuildingsPlanning from '../PageSections/BuildingsPlanning/BuildingsPlanning'

const IvanTest = () => {
    // const { data, loading, error } = useSelector((state) => state.instagramPosts);

    return (
        <div>
            {/* <div className={styles.kek}>
               {
                   data.map(card => (
                       <InstagramCard {...card}/>
                   ))
               }
            </div>
            <Button icon="true" text="1-комнатная" fz="25px" marginRight="10px"/>
            <div className={styles['buy-title']}>
                <Title text="Купить квартиру"/>
                <Button text="Перейти в каталог" icon="true"/>
            </div>
            <LeadForm /> */}
            {/* <BuyApartment titleText="Купить квартиру" /> */}
            {/* <FindEstate />
            <FeedNews /> */}
            {/* <PaymentMethod />
            <DocsSection /> */}
            {/* <MansoryGallery /> */}
        </div>
    )
}

export default IvanTest
