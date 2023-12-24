import { useFetch } from './useFetch'

type Repo = {
    id: number
    name: string
    description: string
}

export const useGitHubRepos = (username: string) => {
    return useFetch<Repo[]>(
        `https://api.github.com/users/${username}/repos`
    );
}