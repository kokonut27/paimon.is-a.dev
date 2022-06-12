export default function handler(req, res) {
  const { num, rarity, set } = req.query
  
  
  res.status(200).json({ 
    types: ["number", "rarity", "set"],
    num: num, rarity: rarity, set: set
  })
}
