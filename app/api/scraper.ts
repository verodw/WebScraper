import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

type Data = {
  result: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.query;
  if (typeof url !== 'string') {
    res.status(400).json({ result: [] });
    return;
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const result: string[] = []; 

    $('h1').each((index, element) => {
      result.push($(element).text());
    });

    console.log(result);

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ result: [] });
  }
}
