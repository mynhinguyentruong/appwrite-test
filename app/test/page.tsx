'use client'

import { useState } from "react"

export default function TestPage() {

    const [form, setForm] = useState({
        content: "",
        files: null
    })

    function handleChange(e) {
        const name = e.target.name
        if (name === 'files') {
            setForm(prevForm => {
                return {...prevForm, files: e.target.files}
            })
        }
        
        if (name === 'content') {
            setForm(prevForm => {
                return {...prevForm, content: e.target.value}
            })
        }

        console.log({form});
        
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData()
        data.append('content', form.content)
        if (form.files) {
            for (const file of form.files as FileList) {
                data.append('files[]', file, file.name)
            }
        }
        console.log({data});
        

        try {
            const res = await fetch('/api/new-post', {
                method: 'POST',
                body: data
            })

        } catch (err) {
            console.log(err);
            
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea
             name="content"
             value={form.content}
             onChange={handleChange}
             id="content"
             />
            <label htmlFor="file">GET FILE</label>
            <input type="file" accept="image/*" id="file" name="files" multiple onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}