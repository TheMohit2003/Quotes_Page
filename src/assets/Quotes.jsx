import React from 'react'

export default function Quotes(){
    return fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
}
