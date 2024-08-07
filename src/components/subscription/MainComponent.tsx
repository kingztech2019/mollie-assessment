import React from 'react'
import SubscriptionComponent from './SubscriptionComponent'
import RevenueRiskComponent from './RevenueRisk'

export default function MainComponent() {
  return (
    <div className="bg-gray-100  p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-3/4">
          <SubscriptionComponent />
        </div>
        <div className="">
          <RevenueRiskComponent />
        </div>
      </div>
    </div>
  )
}
