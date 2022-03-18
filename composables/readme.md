## Composables: reuse code

## Example code:
https://www.thisdot.co/blog/custom-composable-methods-with-vue-3
```
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/user';

export async function useUser() {
  const userStore = useUserStore();

  // fetch users from api
  await userStore.fetchUsers();

  // get users from store state and to ref
  // warning: if no storeToRefs the screen no change
  const { users } = storeToRefs(userStore);

  return {
    users
  };
}
```
