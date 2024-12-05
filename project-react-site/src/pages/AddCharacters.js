const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !description || !image) {
    alert("All fields are required!");
    return;
  }

  const id = name.toLowerCase().replace(/\s+/g, '-');

  const formData = new FormData();
  formData.append('id', id);
  formData.append('name', name);
  formData.append('description', description);
  formData.append('image', image);

  try {
    const response = await fetch('https://project-react-site-server.onrender.com/api/addedcharacters', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Character added successfully!');
      navigate('/characters-list');
    } else {
      const result = await response.json();
      alert(result.message || 'Error: Could not add character.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred while submitting the form.');
  }
};