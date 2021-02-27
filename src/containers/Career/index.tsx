
import React, { FC, useState } from 'react'
import CareerMain from 'components/Career'
import { Career } from 'services/models/career'

const CareerContainer: FC<{ career: Career }> = ({ career }) => {
  const [userName, setUserName] = useState('MHLWitter')

  return <CareerMain career={career} />
}

export default CareerContainer
