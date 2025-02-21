import type { Person } from './Person';


export function greet(person: Person): string {
    return `Hej, ${person.name}! Du är ${person.age} år gammal.`;
}
