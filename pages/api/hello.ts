// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
    quote: string
    author: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    var apiConfig = {
        url: 'https://api.quotable.io/random',
        method: 'GET',
    }
    return axios(apiConfig).then(function (response) {
        res.status(200).json({
            quote: response.data.content,
            author: response.data.author,
        })
    })
}
