import { Heading, Img, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Success = () => {

    const params = useParams();
    const { upgradePlan, user } = useContext(AuthContext);

    useEffect(() => {
        upgradePlan(params.subscription);
    }, [params.subscription, user]);

    return (
        <VStack w={'full'} my={'20'} spacing={'6'}>
            <Img
                src="/favicon.png"
                alt="BitHarbor"
                mx={"auto"}
                h={"20"}
                w={"20"}
                objectFit={"contain"}
            />
            <Heading fontSize={'9xl'}>
                <FaCheckCircle />
            </Heading>
            <Heading textAlign={'center'}>
                Payment successful
            </Heading>
            <Text textAlign={'center'}>
                Thanks for your payment. Your account has been upgraded to {params.subscription.toUpperCase()} plan. Login again to start using it.
            </Text>
        </VStack>
    )
}

export default Success
