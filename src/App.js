import React, { Component, Fragment } from 'react'
import Header from './app/header'
import Footer from './app/footer'
import PersonList from './app/content/index'

export default class extends Component {
  render() {
    return <Fragment>

      <Header />

      <PersonList />

      <Footer />

    </Fragment>
  }
}