<template>
  <footer>
    <p id="copyright">© 2025 Jaron Zijlstra | Jaronline</p>
    <div id="socials">
      <a href="mailto:info@jaronline.dev" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon icon="fa-solid fa-envelope" size="2x" />
      </a>
      <a href="https://links.jaronline.dev/linkedin" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
      </a>
      <a href="https://links.jaronline.dev/github" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon icon="fa-brands fa-github" size="2x" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 1.25rem;
  background-color: #082F49;
  color: rgb(229 231 235 / 1);
}

#copyright {
  margin-bottom: .75rem;
}

#socials {
  display: flex;
  gap: .5rem;
}
</style>