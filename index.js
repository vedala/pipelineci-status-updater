import { Octokit } from "@octokit/core";

const octokitClient = new Octokit({
  auth: installationToken
});

module.exports.handler = async(event) => {
  await octokitClient.request("POST /repos/{owner}/{repo}/statuses/{sha}", {
    owner: repoOwner,
    repo: repoToClone,
    sha: eventPayload.pull_request.head.sha,
    state: "success",
    target_url: 'https://example.com/build/status',
    description: 'Description from app.js',
    context: 'ci-update/status-update',
    headers: {
      "x-github-api-version": "2022-11-28",
    },
  });
}
