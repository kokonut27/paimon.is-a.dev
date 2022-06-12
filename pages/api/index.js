export default function handler(req, res) {
  res.status(200).json({ 
    types: ["artifacts", "bosses", "characters", "consumables", "domains", "enemies", "items", "lands", "weapons"] 
  })
}
