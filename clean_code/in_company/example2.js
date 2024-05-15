function isEligible(age, hasConsent) {
  if (age > 18 && hasConsent === true) {
    return true;
  } else {
    return false;
  }
}

function isEligibleEdited(age, hasConsent) {
  return age > 18 && hasConsent === true
}