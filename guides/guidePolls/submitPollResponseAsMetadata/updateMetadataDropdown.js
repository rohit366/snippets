// This guide sets new metadata for the visitor when they hit Submit!

// Get selector for dropdown
var personaSelect = document.querySelector('._pendo-multi-choice-poll-select');

// On guide submit, pass in persona selection as metadata
document.querySelector('[id^="pendo-button"]').addEventListener('click', updatePersona);

function updatePersona(){    
    // create visitor agent metadata field called 'persona', this property can be updated to satifsfy different naming requirements
    // 'userRole' is the value pulled from available options in the multi-select poll. Update the poll to provide different values.
    let userRole = personaSelect.options[personaSelect.selectedIndex].text;
    const account = window.pendo.getSerializedMetadata().account;
    const visitor = window.pendo.getSerializedMetadata().visitor;
	window.pendo.updateOptions({
        account: {
			...account,
		},
		visitor: {
			...visitor,
			persona: userRole
		},
	});
    
	// guarantee the correct guide payload for the new metadata
	pendo.loadGuides();
}
