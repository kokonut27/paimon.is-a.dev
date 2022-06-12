export default function handler(req, res) {
  res.status(200).json({ 
    types: ["artifacts", "bosses", "characters", "consumables", "domains", "elements", "enemies", "items", "lands", "weapons"] 
  })
}
