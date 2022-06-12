// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    types: ["artifacts", "bosses", "characters", "consumables", "domains", "enemies", "items", "lands", "weapons"] 
  })
}
