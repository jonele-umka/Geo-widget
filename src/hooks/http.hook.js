// этот hook для запроса на сервер

// useCallback - это работа с асинхронными данными

// request - функция для отправки запроса на сервер

// promise - это ответ сервера

import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)

        try {
            if (body) {
                body = JSON.stringify(body)
                headers["Content-Type"] = 'application/json'
            }

            const response = await fetch(url, { method, body, headers })
                .then(setLoading(true))

            const data = await response.json()
                .then(setLoading(false))

            return data
        } catch (error) {
            setLoading(false)
            console.error('Что-то пошло не так!')
        }
    }, [])

    return { loading, request }
}