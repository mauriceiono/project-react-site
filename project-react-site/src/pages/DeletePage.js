useEffect(() => {
  const fetchCharacters = async () => {
    try {
      const addedCharactersResponse = await fetch('https://project-react-site-server.onrender.com/api/addedcharacters');
      const characterListResponse = await fetch('https://project-react-site-server.onrender.com/api/CharacterList');

      if (!addedCharactersResponse.ok || !characterListResponse.ok) {
        throw new Error('Failed to fetch characters.');
      }

      const addedCharacters = await addedCharactersResponse.json();
      const characterList = await characterListResponse.json();

      setCharacters([...addedCharacters, ...characterList]);
    } catch (error) {
      setError(error.message);
    }
  };

  fetchCharacters();
}, []);