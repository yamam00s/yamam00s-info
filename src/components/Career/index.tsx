
import React, { FC } from 'react'
import { Career } from 'services/models/career'

const CareerMain: FC<{ career: Career }> = ({ career }) => {
  return (
    <div>
      <p>{career.title}</p>
    </div>
  )
}

export default CareerMain
