import { useState } from 'react';

export const useCategoryStep = () => {
  const [regionStep, setRegionStep] = useState(0);
  const [partyStep, setPartyStep] = useState(0);

  const nextRegionStep = () => {
    setRegionStep(1);
  };

  const nextPartyStep = () => {
    setPartyStep(1);
  };

  const resetRegionStep = () => {
    setRegionStep(0);
  };

  const resetPartyStep = () => {
    setPartyStep(0);
  };

  return {
    regionStep,
    partyStep,
    nextRegionStep,
    nextPartyStep,
    resetRegionStep,
    resetPartyStep,
  };
};
