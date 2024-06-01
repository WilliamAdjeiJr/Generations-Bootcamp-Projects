import subprocess

# Boilerplate function - include this in every test below!
def prepare_variables(input_array, output_array):
    # Prepare Variables
    input_string = '\n'.join(input_array)
    input_data = input_string.encode('utf-8')
    expected_output = '\n'.join(output_array)

    # Get Actual Output from Input Data
    output_data = subprocess.run(['python', 'main.py'], input=input_string, stdout=subprocess.PIPE, text=True, check=True)
    actual_output = output_data.stdout.strip()

    # Test if Expected Output is found in Actual Output
    return expected_output, actual_output

# Test 2: Subtraction
def test_subtraction():
    # Inputs
    input_array = [
        '10',
        '3',
        '2'  # Choose subtraction operation
    ]

    # Outputs
    output_array = [
        '7'
    ]

    # Test if Input results in Output
    expected_output, actual_output = prepare_variables(input_array, output_array)
    assert expected_output in actual_output
