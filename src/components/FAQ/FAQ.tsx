'use client'

import React, { useState } from 'react'
import { FAQfield } from './FAQfield';

export const FAQ = () => {
    const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

    const content = [
        {
            question: "How to buy crypto with credit card?",
            answer: "The process is very easy! So, how does it work? To buy crypto with credit card, you should register an account, select a cryptocurrency you’d like to buy, make a payment, and receive crypto! Crypto purchases up to $700 require only basic verification, which is a perfect option for crypto enthusiasts."
        },
        {
            question: "Where to buy cryptocurrency with credit card?",
            answer: "We offer the fastest and easiest way to buy crypto with credit card. The key step is to go through the registration process, which won’t take long. Worry about our level of security? We use the 3D secure protocol to ensure first-class security for your debit and credit card payments. Thus, be sure your assets are protected with high-end encryption technology so that you can buy crypto with credit card securely."
        },
        {
            question: "What is the best place to buy crypto?",
            answer: "If you’re still looking for the best place to buy crypto, you’re definitely in the right place! We’re sure that Denrosa service is the best place to buy and sell crypto since it’s a licensed financial services provider with guaranteed legal compliance and a secure infrastructure system for fast crypto exchange services at fair prices. In addition to traditional purchases with a bank card, you can use alternative payment methods available (for instance, SEPA bank transfers)."
        },
        {
            question: "What is the best way to buy crypto with debit or credit card?",
            answer: "Denrosa site offers the best way to buy crypto and all leading altcoins using any credit, prepaid, or debit card issued by VISA, Mastercard, or Maestro. All crypto exchanges are characterized by fast speed and maximum efficiency — you can enjoy the best way to buy crypto online at the best exchange rates and without any extra charges."
        },
        {
            question: "How to sell crypto online?",
            answer: "It’s easy and simple with Denrosa! We’re the most convenient place to sell crypto for EUR. All you need to do is select an amount of cryptocurrency for sale, fill in your SEPA account details, transfer crypto and receive EUR to your SEPA account! Also, you have an awesome opportunity to sell crypto online for your local fiat currencies. Sell and buy crypto online at Denrosa easily and securely!"
        }
    ];

    const answerToggler = (index: number) => {
        const isItemAlreadyOpen = isOpenIndex === index;
        setIsOpenIndex(isItemAlreadyOpen ? null : index);
    }

    return (
        <section className=" py-[150px] text-lightText bg-backgroundSecondary w-full">
            <div className="container">
                <h2 id="animate-left" className="mb-[60px] text-[45px] font-bold text-center">FAQ</h2>

                {content.map((item, index) => (
                    <FAQfield key={index} isOpen={isOpenIndex === index} question={item.question} answer={item.answer} answerToggler={() => answerToggler(index)} />
                ))}
            </div>
        </section>
    )
}
