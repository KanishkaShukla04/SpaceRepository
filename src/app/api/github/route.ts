import { NextResponse } from "next/server";

export async function GET() {
  const username = "KanishkaShukla04";

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  const repos = await response.json();

  const projects = repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
  }));

  return NextResponse.json(projects);
}