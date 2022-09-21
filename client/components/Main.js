import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../assets/eth.png'

const style = {
    wrapper: `w-screen flex items-center justify-center mb-96`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl border border-[#20242A] hover:border-[#41444F] flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
    currencySelecter: `flex w-1/4`,
    currencySelecterContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelecterTicker: `mx-2`,
    currencySelecterArrow: `text-lg`,
    confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`
}

const Main = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.formHeader}>
                    <div>Swap</div>
                    <div>
                        <RiSettings3Fill />
                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type="text"
                        className={style.transferPropInput}
                        placeHolder="0.0"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        onChange={(e) => handleChange(e, 'amount')}
                    />
                    <div className={style.currencySelecter}>
                        <div className={style.currencySelecterContent}>
                            <div className={style.currencySelectorIcon}>
                                <Image src={ethLogo} alt="eth logo" height={20} width={20} />
                            </div>
                            <div className={style.currencySelecterTicker}>ETH</div>
                            <AiOutlineDown className={style.currencySelecterArrow} />
                        </div>
                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type="text"
                        className={style.transferPropInput}
                        placeholder="0x..."
                        onChange={(e) => handleChange(e, 'addressTo')}
                    />
                    <div className={style.currencySelecter}></div>
                </div>
                <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
                    Confirm
                </div>
            </div>
        </div>
    )
}




//upto 31.55 getting the wallet to work


export default Main;
