import { Message } from '../models/message';

export class Data {

    static messages: Message[] = [

        {
            id: 'message1',
            question: 'hi',
            answer: 'hello, wassap'
        },
        {
            id: 'message2',
            question: 'what is your name',
            answer: 'my name is aditya'
        },
        {
            id: 'message3',
            question: 'what is the full name',
            answer: 'full name is Aditya gopala lakshmi narayana'
        },
        {
            id: 'message1',
            question: 'hi',
            answer: 'hello, wassap'
        },
        {
            id: 'message2',
            question: 'what is your name',
            answer: 'my name is aditya'
        },
        {
            id: 'message3',
            question: 'what is the full name',
            answer: 'full name is Aditya gopala lakshmi narayana'
        },
        {
            id: 'message1',
            question: 'hi',
            answer: 'hello, wassap'
        },
        {
            id: 'message2',
            question: 'what is your name',
            answer: 'my name is aditya'
        },
        {
            id: 'message3',
            question: 'what is the full name',
            answer: 'full name is Aditya gopala lakshmi narayana'
        },
        {
            id: 'message1',
            question: 'hi',
            answer: 'hello, wassap'
        },
        {
            id: 'message2',
            question: 'what is your name',
            answer: 'my name is aditya'
        },
        {
            id: 'message3',
            question: 'what is the full name',
            answer: 'full name is Aditya gopala lakshmi narayana'
        }
    ];

    public static getMessages(): Message[] {
        return this.messages;
    }
}
