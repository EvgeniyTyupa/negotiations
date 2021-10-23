import * as axios from "axios";

const baseURL = 'https://v1.nocodeapi.com/nadai/google_sheets/TskAKqNbdGkTLJrY?tabId=leads&api_key=GHCmpNtnTEhcSbDjA';
const consURL = 'https://v1.nocodeapi.com/nadai/google_sheets/TskAKqNbdGkTLJrY?tabId=consultations&api_key=GHCmpNtnTEhcSbDjA';
const trainURL = 'https://v1.nocodeapi.com/nadai/google_sheets/TskAKqNbdGkTLJrY?tabId=training&api_key=GHCmpNtnTEhcSbDjA';

const tgToken = "1277105148:AAFhnqIm9SKeNy6Ygv-_NlXxTmwhSQwTgJo"
const chatId = "-1001430648003"
const tgUrl = "https://api.telegram.org/bot" + tgToken + "/sendMessage"

export const googleApi = {
    saveDataToGoogleSheet(formData){
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;
        let url = formData.userURL;

        let actionType = formData.actionType

        switch(actionType){
            case "training": {
                return axios.post(trainURL, JSON.stringify([[name, phone, email, url]]), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.data);
            }
            case "consultation": {
                return axios.post(consURL, JSON.stringify([[name, phone, email, url]]), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.data);
            }
            default: {
                return axios.post(baseURL, JSON.stringify([[name, phone, email, url]]), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.data);
            }
        }
    }
}

export const tgApi = {
    saveDataToTelegramBot(formData){
        let actionType = formData.actionType
        let action = ""

        switch(actionType){
            case "training": {
                action = "Запрос презентации"
                break;
            }
            case "consultation": {
                action = "Консультация"
                break;
            }
            default: {
                action = "Регистрация"
                break;
            }
        }

        let message = "<strong>Новая заявка!</strong>\n<strong>Лендинг:</strong> negotiations.profi-space.com / обычный\n<strong>Имя:</strong> " + formData.name +  "\n<strong>Телефон:</strong> " + formData.phone + "\n<strong>Email:</strong> " + formData.email + "\n<strong>Тип заявки:</strong> " + action;
        const data = {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        }
        return axios.post(tgUrl, data)
        .then(response => response.data)
    }
}