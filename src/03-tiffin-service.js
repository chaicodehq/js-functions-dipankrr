/**
 * 🍱 Mumbai Tiffin Service - Plan Builder
 *
 * Mumbai ki famous tiffin delivery service hai. Customer ka plan banana hai
 * using destructuring parameters aur rest/spread operators.
 *
 * Functions:
 *
 *   1. createTiffinPlan({ name, mealType = "veg", days = 30 })
 *      - Destructured parameter with defaults!
 *      - Meal prices per day: veg=80, nonveg=120, jain=90
 *      - Agar mealType unknown hai, return null
 *      - Agar name missing/empty, return null
 *      - Return: { name, mealType, days, dailyRate, totalCost }
 *
 *   2. combinePlans(...plans)
 *      - Rest parameter! Takes any number of plan objects
 *      - Each plan: { name, mealType, days, dailyRate, totalCost }
 *      - Return: { totalCustomers, totalRevenue, mealBreakdown }
 *      - mealBreakdown: { veg: count, nonveg: count, ... }
 *      - Agar koi plans nahi diye, return null
 *
 *   3. applyAddons(plan, ...addons)
 *      - plan: { name, mealType, days, dailyRate, totalCost }
 *      - Each addon: { name: "raita", price: 15 }
 *      - Add each addon price to dailyRate
 *      - Recalculate totalCost = new dailyRate * days
 *      - Return NEW plan object (don't modify original)
 *      - addonNames: array of addon names added
 *      - Agar plan null hai, return null
 *
 * Hint: Use { destructuring } in params, ...rest for variable args,
 *   spread operator for creating new objects
 *
 * @example
 *   createTiffinPlan({ name: "Rahul" })
 *   // => { name: "Rahul", mealType: "veg", days: 30, dailyRate: 80, totalCost: 2400 }
 *
 *   combinePlans(plan1, plan2, plan3)
 *   // => { totalCustomers: 3, totalRevenue: 7200, mealBreakdown: { veg: 2, nonveg: 1 } }
 */
export function createTiffinPlan({ name, mealType = "veg", days = 30 } = {}) {
  if (typeof name !== 'string' || name.length == 0 || !['veg', 'nonveg', 'jain'].includes(mealType)) {
    return null
  }
   const rates = { veg: 80, nonveg: 120, jain: 90 };
  return { name, mealType, days, dailyRate:rates[mealType], totalCost:rates[mealType]*days }
}

export function combinePlans(...plans) {
  if (plans.length == 0) {
    return null
  }
  let totalCustomers = plans.length
  let veg = 0; let nonveg = 0; let jain = 0;
  let totalRevenue = 0;

  for (let index = 0; index < plans.length; index++) {

     if (plans[index].mealType === 'veg') {
      veg++
     }else if (plans[index].mealType === 'nonveg') {
      nonveg++
     }else{
      jain++
     }
    
     totalRevenue = totalRevenue + plans[index].totalCost
  }

  const mealBreakdown = { veg, nonveg, jain }
  return { totalCustomers, totalRevenue, mealBreakdown }
}

export function applyAddons(plan, ...addons) {
  if (plan == null) {
    return null
  }
  let totalAddonDailyCost = 0;
  let addonNames = []
  for (let index = 0; index < addons.length; index++) {
     totalAddonDailyCost = totalAddonDailyCost + addons[index].price;
     addonNames.push(addons[index].name)
  }

  const totalExtraCost = plan.days*totalAddonDailyCost
  const totalCost = plan.totalCost+totalExtraCost
  const newDailyRate = totalCost/plan.days
  // const name = plan.name; let mealType = plan.mealType; let days = plan.days; 

  return { ...plan, dailyRate: newDailyRate, totalCost, addonNames }
}
