import { of, from, timer, range, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

const numberRangeObservable = range(0, 10);

numberRangeObservable.subscribe({
    next: (value: any) => console.log('Next for numberRangeObservable:', value),
    complete: () => console.log('Complete for numberRangeObservable!'),
    error: (error) => console.log('Error for numberRangeObservable!', error)
})

const fetchFunc = (observer) => {
    fetch('https://api.github.com/search/repositories?q=netology-code')
        .then(res => res.json())
        .then(value => observer.next(value));
}

const githubObservable = new Observable(fetchFunc).pipe(first());

githubObservable.subscribe({
    next: (value: any) => console.log('Next for GitHub Observable:', value),
    complete: () => console.log('Complete for GitHub Observable!'),
    error: (error) => console.log('Error for GitHub Observable!', error)
})

const fetchFunc2 = (observer) => {
    fetch('https://gitlab.com/api/v4/projects?search=netology-code')
        .then(res => res.json())
        .then(value => observer.next(value));
}

const gitlabObservable = new Observable(fetchFunc2).pipe(first());

gitlabObservable.subscribe({
    next: (value: any) => console.log('Next for GitLab Observable:', value),
    complete: () => console.log('Complete for GitLab Observable!'),
    error: (error) => console.log('Error for GitLab Observable!', error)
})