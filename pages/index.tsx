import { NextPage } from 'next'
import HomePage from '../components/home'
import axios from 'axios';
import React from 'react'

interface APIdata {
  quote: string;
  author: string;
  tags: string[];
  error: string | undefined;
}

class Page extends React.Component {
  static async getInitialProps(ctx: any) {
    const res = await fetch('https://api.quotable.io/random')
    const json = await res.json()
    return { author: json.author, quote: json.content, tags: json.tags }
  }

  render() {
    var quoteContent = this.props as APIdata
    return (
    <div>
      <div>Quote: {quoteContent.quote}</div>
      <div>Author: {quoteContent.author}</div>
      <div>Tags: {quoteContent.tags}</div>
    </div>
    )
  }
}

export default Page
