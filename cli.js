const { Octokit } = require('octokit')
const env = require('dotenv')
env.config()

const token = process.env.GITHUB_TOKEN
console.log(token)

const octokit = new Octokit({
  auth: token
})

async function run () {
  const response = await octokit.request('GET /user')

  console.log(`authenticated as: ${response.data.login}`)
}

run()