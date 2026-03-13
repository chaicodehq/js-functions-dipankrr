/**
 * 🍳 Dosa Counter - Order Calculator
 *
 * Raju ka South Indian dosa counter hai Bangalore mein. Customer aata hai,
 * dosa ka type bolta hai, kitne chahiye bolta hai, aur spicy chahiye ya nahi.
 * Tujhe order calculate karke bill banana hai.
 *
 * Rules:
 *   - Dosa prices: plain=40, masala=60, onion=50, butter=70, paper=90, cheese=80
 *   - quantity ka default value 1 hai (agar nahi diya toh 1 maano)
 *   - isSpicy ka default value false hai
 *   - Agar isSpicy true hai, toh har dosa pe Rs 10 extra lagao
 *   - pricePerDosa = base price + (10 if spicy)
 *   - total = pricePerDosa * quantity
 *   - Return: { type, quantity, pricePerDosa, total }
 *   - Hint: Use default parameters, object return
 *
 * Validation:
 *   - Agar type string nahi hai ya unknown type hai, return null
 *   - Agar quantity positive number nahi hai (<=0 ya NaN), return null
 *
 * @param {string} type - Dosa type
 * @param {number} [quantity=1] - Number of dosas
 * @param {boolean} [isSpicy=false] - Add spicy for Rs 10 extra
 * @returns {{ type: string, quantity: number, pricePerDosa: number, total: number } | null}
 *
 * @example
 *   calculateDosaOrder("masala", 2, true)
 *   // => { type: "masala", quantity: 2, pricePerDosa: 70, total: 140 }
 *
 *   calculateDosaOrder("plain")
 *   // => { type: "plain", quantity: 1, pricePerDosa: 40, total: 40 }
 */
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  
  const validType = ['plain', 'masala', 'onion', 'butter', 'paper', 'cheese'].includes(type)

  if (typeof type !== 'string' || !validType || typeof quantity !== 'number' || quantity <= 0) {
    return null
  }

  let total;
  let pricePerDosa;

  switch (type) {
    case 'plain':
      pricePerDosa = 40
      total = 40*quantity
      break;
    case 'masala':
      pricePerDosa = 60
      total = 60*quantity
      break;
    case 'onion':
      pricePerDosa = 50
      total = 50*quantity
      break;
    case 'butter':
      pricePerDosa = 70
      total = 70*quantity
      break;
    case 'paper':
      pricePerDosa = 90
      total = 90*quantity
      break;
    default:
      pricePerDosa = 80
      total = 80*quantity
      break;
  }

  if (isSpicy) {
    total = total + (10*quantity)
    pricePerDosa = total/quantity
  }

  return { type, quantity, pricePerDosa, total }

}
